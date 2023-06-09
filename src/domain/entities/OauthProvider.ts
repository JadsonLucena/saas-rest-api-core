import UUID from '../VO/UUID.js'
import Name from '../VO/Name.js'

import Entity from './Entity.js'

export default class OauthProvider extends Entity {
  #name: Name
  #picture?: URL
  #clientId: string
  #clientSecret: string
  #updatedAt: Date
  #disabledAt?: Date

  constructor ({
    id,
    name,
    picture,
    clientId,
    clientSecret,
    createdAt,
    updatedAt,
    disabledAt
  }: {
    id?: UUID,
    name: Name,
    picture?: URL,
    clientId: string,
    clientSecret: string,
    createdAt?: Date,
    updatedAt?: Date,
    disabledAt?: Date
  }) {
    super({
      id,
      createdAt
    })

    this.name = name
    this.picture = picture
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.disabledAt = disabledAt
    this.updatedAt = updatedAt ?? this.createdAt

    /* let errors = []

    try {
      this.name = name
    } catch (err) {
      errors.push(err)
    }

    try {
      this.picture = picture
    } catch (err) {
      errors.push(err)
    }

    try {
      this.clientId = clientId
    } catch (err) {
      errors.push(err)
    }

    try {
      this.clientSecret = clientSecret
    } catch (err) {
      errors.push(err)
    }

    try {
      this.updatedAt = updatedAt
    } catch (err) {
      errors.push(err)
    }

    try {
      this.disabledAt = disabledAt
    } catch (err) {
      errors.push(err)
    }

    if (errors.length > 1) {
      throw new AggregateError(errors, 'Invalid OauthProvider')
    } else if (errors.length === 1) {
      throw errors[0]
    } */
  }

  set name (name: Name) {
    if (this.#disabledAt) {
      throw new Error('It\'s disabled')
    } else if (!(name instanceof Name)) {
      throw new TypeError('Invalid name')
    }

    this.#name = name
    this.#updatedAt = new Date()
  }

  get name () {
    return this.#name
  }

  set picture (picture: URL | undefined) {
    if (this.#disabledAt) {
      throw new Error('It\'s disabled')
    } else if (!(picture instanceof URL) && typeof picture !== 'undefined') {
      throw new TypeError('Invalid picture')
    }

    this.#picture = picture
    this.#updatedAt = new Date()
  }

  get picture () {
    return this.#picture
  }

  set clientId (clientId: string) {
    if (this.#disabledAt) {
      throw new Error('It\'s disabled')
    } else if (typeof clientId !== 'string' || !clientId) {
      throw new TypeError('Invalid clientId')
    }

    this.#clientId = clientId
    this.#updatedAt = new Date()
  }

  get clientId () {
    return this.#clientId
  }

  set clientSecret (clientSecret: string) {
    if (this.#disabledAt) {
      throw new Error('It\'s disabled')
    } else if (typeof clientSecret !== 'string' || !clientSecret) {
      throw new TypeError('Invalid clientSecret')
    }

    this.#clientSecret = clientSecret
    this.#updatedAt = new Date()
  }

  get clientSecret () {
    return this.#clientSecret
  }

  set updatedAt (updatedAt: Date) {
    if (this.#disabledAt) {
      throw new Error('It\'s disabled')
    } else if (!(updatedAt instanceof Date)) {
      throw new TypeError('Invalid updatedAt')
    }

    this.#updatedAt = updatedAt
  }

  get updatedAt () {
    return this.#updatedAt
  }

  set disabledAt (disabledAt: Date | undefined) {
    if (!(disabledAt instanceof Date) && typeof disabledAt !== 'undefined') {
      throw new TypeError('Invalid disabledAt')
    } else if (this.#disabledAt && disabledAt) {
      throw new Error('It\'s already disabled')
    }

    this.#disabledAt = disabledAt
    this.#updatedAt = new Date()
  }

  get disabledAt () {
    return this.#disabledAt
  }
}
