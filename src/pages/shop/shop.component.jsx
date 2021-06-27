import React from 'react'

import CollectionPrivew from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from './shop.data'

import './shop.styles.scss'

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const collections = this.state.collections
    return (
      <div>
        {
          collections.map(({ id, ...otherCollectionsData }) => (
            <CollectionPrivew key={id} { ...otherCollectionsData } />
          ))
        }
      </div>
    )
  }
}