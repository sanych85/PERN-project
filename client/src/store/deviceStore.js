import { makeAutoObservable } from 'mobx';
export default class DeviceStore {
  constructor() {
   
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Телевизоры' },
      { id: 4, name: 'Ноутбуки' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' },
    ];
    this._devices = [
      { id: 1, name: 'I phone pro', price: 20000, rating: 5, img: '' },
      { id: 2, name: 'I phone pro', price: 25000, rating: 5, img: '' },
      { id: 3, name: 'Samsung G', price: 15000, rating: 5, img: '' },
      { id: 4, name: 'Note', price: 11000, rating: 5, img: '' },
      { id: 5, name: 'Gt master Edition', price: 11000, rating: 5, img: '' },
      { id: 6, name: 'Realme Note', price: 9000, rating: 5, img: '' },
      { id: 7, name: 'Note', price: 14000, rating: 3.5, img: '' },
    ];
    this._selectedType = {};
    this._selectedBrand= {}

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(type){
    this._selectedBrand = type
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
