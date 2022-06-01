import { CreateOptionsType } from 'embla-carousel/components/Options'

export type OptionsType = CreateOptionsType<{
  delay: number
  playOnInit: boolean
  stopOnInteraction: boolean
  stopOnMouseEnter: boolean
  stopOnLastSnap: boolean
}>

export const defaultOptions: OptionsType = {
  active: true,
  breakpoints: {},
  delay: 4000,
  playOnInit: true,
  stopOnInteraction: true,
  stopOnMouseEnter: false,
  stopOnLastSnap: false,
}

export type AutoplayOptionsType = Partial<OptionsType>
