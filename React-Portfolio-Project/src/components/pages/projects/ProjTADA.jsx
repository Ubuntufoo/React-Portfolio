// TADA! project slide

import Carousel from '../../features/Carousel'
import Tabs from '../../features/Tabs'
import Button from '../../features/Button'
import { projTADAContent } from '../../../utils/images'
import { tabsTADA } from '../../../utils/tabs'
import { projMainContent } from '../../../utils/images'

export default function ProjTADA() {
  return (
    <div className="relative h-screen">
      <h1 className="absolute left-6 top-7 mx-auto w-fit min-w-max rounded-lg border-2 border-black p-1.5 text-center font-mono font-semibold tracking-wider text-gray-950 sm:text-lg md:left-8 md:top-11 2xl:inset-x-0 2xl:top-12 2xl:text-2xl">
        <code>&lt;TADA!/&gt;</code>
      </h1>
      <Tabs tabsContent={tabsTADA} />
      <Carousel images={projTADAContent} />
      <Button
        styles=""
        position="absolute"
        text="Visit"
        isExternal
        link={projMainContent[1].linkExternal}
      />
    </div>
  )
}
