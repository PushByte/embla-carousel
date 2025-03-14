import { TestElementDimensionsType } from '../mocks/testElements.mock'

/*
   Fixture 1

  - Horizontal
  - LTR
  - No slide margins
  - Container width: 1000px
  - Slide widths: 800px, 400px, 200px, 500px, 300px
*/
export const FIXTURE_CONSTRUCTOR_1: TestElementDimensionsType = {
  containerOffset: {
    offsetWidth: 1000,
    offsetHeight: 190,
    offsetTop: 0,
    offsetLeft: 0
  },
  slideOffsets: [
    {
      offsetWidth: 800,
      offsetHeight: 190,
      offsetTop: 0,
      offsetLeft: 0
    },
    {
      offsetWidth: 400,
      offsetHeight: 190,
      offsetTop: 0,
      offsetLeft: 800
    },
    {
      offsetWidth: 200,
      offsetHeight: 190,
      offsetTop: 0,
      offsetLeft: 1200
    },
    {
      offsetWidth: 500,
      offsetHeight: 190,
      offsetTop: 0,
      offsetLeft: 1400
    },
    {
      offsetWidth: 300,
      offsetHeight: 190,
      offsetTop: 0,
      offsetLeft: 1900
    }
  ],
  endMargin: {
    property: 'marginRight',
    value: 0
  }
}

/*
   Fixture 2

  - Horizontal
  - LTR
  - Container width: 1000px
  - No slides
*/
export const FIXTURE_CONSTRUCTOR_2: TestElementDimensionsType = {
  containerOffset: {
    offsetWidth: 1000,
    offsetHeight: 190,
    offsetTop: 0,
    offsetLeft: 0
  },
  slideOffsets: [],
  endMargin: {
    property: 'marginRight',
    value: 0
  }
}
