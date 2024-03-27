export class MediaModel {
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date;
  constructor(
    private readonly _mediaMimType: string,
    private readonly _mediaUrl: string,
    private readonly _size: number,
    private readonly _name: string,
    private readonly _owner: string,
    private readonly _mediaId: string,
    private readonly _productId?: string,
  ) {
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  get productId() {
    return this._productId;
  }

  get mediaId() {
    return this._mediaId;
  }
  get mediaMimType() {
    return this._mediaMimType;
  }
  get mediaUrl() {
    return this._mediaUrl;
  }

  get size() {
    return this._size;
  }

  get name() {
    return this._name;
  }

  get owner() {
    return this._owner;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }
}
