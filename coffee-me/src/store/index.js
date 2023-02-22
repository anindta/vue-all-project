import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1, name: 'Caffe latte', price: 20, image: 'https://i.pinimg.com/564x/89/2e/3c/892e3c099ce9f94f064059dc02d3de20.jpg', desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, animi optio ad voluptatesarchitecto minus itaque sed impedit quod aliquam totam harum non adipisci omnis? Sint aperiamdolorum dolore dolorem.'
      },
      { id: 2, name: 'Cheese Cake', price: 40, image: 'https://i.pinimg.com/564x/1e/fe/31/1efe31ae9e9a252b9d5329e22cdba144.jpg', desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, animi optio ad voluptatesarchitecto minus itaque sed impedit quod aliquam totam harum non adipisci omnis? Sint aperiamdolorum dolore dolorem.' },
      { id: 3, name: 'Caffe Verona', price: 60, image: 'https://i.pinimg.com/564x/05/93/0e/05930e42867589961597a4680f6f8a97.jpg', desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, animi optio ad voluptatesarchitecto minus itaque sed impedit quod aliquam totam harum non adipisci omnis? Sint aperiamdolorum dolore dolorem.' },
      { id: 4, name: 'Chocolate Latte', price: 80, image: 'https://i.pinimg.com/564x/19/18/71/1918714ee5793767265e8e3bab7d17f4.jpg', desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, animi optio ad voluptatesarchitecto minus itaque sed impedit quod aliquam totam harum non adipisci omnis? Sint aperiamdolorum dolore dolorem.' },
      { id: 5, name: 'Doppio Espresso', price: 100, image: 'https://i.pinimg.com/564x/48/08/eb/4808eb7563a019c4b651dfc1ddd0f7dc.jpg', desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, animi optio ad voluptatesarchitecto minus itaque sed impedit quod aliquam totam harum non adipisci omnis? Sint aperiamdolorum dolore dolorem.' },
      { id: 6, name: 'Caffe Mocha', price: 120, image: 'https://i.pinimg.com/564x/59/86/8c/59868cd8ac13fb14fd56eb197c2db608.jpg', desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, animi optio ad voluptatesarchitecto minus itaque sed impedit quod aliquam totam harum non adipisci omnis? Sint aperiamdolorum dolore dolorem.' },
      { id: 7, name: 'Caramel Macchiato', price: 220, image: 'https://i.pinimg.com/564x/93/b3/f6/93b3f6b3975325e85af78672d118f3b0.jpg', desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, animi optio ad voluptatesarchitecto minus itaque sed impedit quod aliquam totam harum non adipisci omnis? Sint aperiamdolorum dolore dolorem.' },
      { id: 8, name: 'Vanilla Latte', price: 320, image: 'https://i.pinimg.com/564x/83/45/f0/8345f0ccfba2830a0c8773bdebb6e1d1.jpg', desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, animi optio ad voluptatesarchitecto minus itaque sed impedit quod aliquam totam harum non adipisci omnis? Sint aperiamdolorum dolore dolorem.' },
      { id: 9, name: 'Cookies & Cream', price: 420, image: 'https://i.pinimg.com/564x/bf/3c/bb/bf3cbbb31f19d16d21da3ffce75567c7.jpg', desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, animi optio ad voluptatesarchitecto minus itaque sed impedit quod aliquam totam harum non adipisci omnis? Sint aperiamdolorum dolore dolorem.' },
      { id: 10, name: 'Mocha', price: 520, image: 'https://i.pinimg.com/564x/61/cc/b2/61ccb2ca6ce6207b13c7e731c3146be1.jpg' },
    ],
  
  },
  getters: {
    products: state => {
      return state.products;
    },
    detail: state => id => {
      return state.products.find(detail => detail.id === id)
    },
  
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
