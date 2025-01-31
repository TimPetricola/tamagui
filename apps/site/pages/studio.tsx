import { getDefaultLayout } from '@lib/getDefaultLayout'
import { ThemeTint } from '@tamagui/logo'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { Button, EnsureFlexed, Spacer, XStack, YStack } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

import { ContainerXL } from '../components/Container'
import { Features } from '../components/Features'
import { LoadInter900 } from '../components/LoadFont'
import { StudioScreen1 } from '../components/StudioScreen1'

export default function StudioSplashPage() {
  const soonButton = (
    <Button
      size="$2"
      theme="green"
      br="$9"
      pe="none"
      mr="$1"
      y={-2}
      display="inline-flex"
    >
      Soon
    </Button>
  )

  return (
    <>
      <NextSeo title="Tamagui Studio" description="Tamagui Studio" />
      <Head>
        <LoadInter900 />
      </Head>

      <YStack>
        <LinearGradient
          pos="absolute"
          fullscreen
          colors={[
            '$backgroundStrong',
            '$color2',
            '$color2',
            '$color2',
            '$backgroundStrong',
          ]}
        />

        <ContainerXL>
          <StudioScreens />

          <Spacer size="$8" />

          <XStack ov="hidden" maw={1000} als="center" $sm={{ fd: 'column', maw: '100%' }}>
            <YStack px="$6" maw="50%" $sm={{ maw: '100%', p: '$2' }}>
              <EnsureFlexed />
              <Features
                size="$5"
                items={[
                  `Generate complete theme suites step-by-step.`,
                  `Visualize your design system.`,
                  `Helpers for media queries, tokens, fonts and more`,
                ]}
              />
            </YStack>
            <YStack px="$6" maw="50%" $sm={{ maw: '100%', p: '$2' }}>
              <EnsureFlexed />
              <Features
                size="$5"
                items={[
                  `Animation test environment and visualizer.`,
                  <span>{soonButton} Advanced theme editor.</span>,
                  <span>{soonButton} Figma and local integrations.</span>,
                ]}
              />
            </YStack>
          </XStack>

          <Spacer size="$12" />
        </ContainerXL>
      </YStack>
    </>
  )
}

const StudioScreens = () => {
  return (
    <YStack my="$6">
      <>
        <StudioScreen1 />
      </>
    </YStack>
  )
}

const ScreenContainer = ({ children }: { children: any }) => (
  <YStack als="center" w="95%" h={850} $sm={{ w: '100%', mt: '$-12', mb: '$-6' }}>
    <ThemeTint>
      <YStack
        fullscreen
        shadowColor="$color10"
        shadowRadius={300}
        o={0.125}
        br="$10"
        zi={0}
        $sm={{ br: '$0' }}
      />
    </ThemeTint>

    <YStack
      fullscreen
      shadowColor="$shadowColor"
      // $theme-dark={{
      //   shadowColor: '#000',
      //   shadowRadius: 90,
      // }}
      shadowRadius={90}
      shadowOffset={{ width: 0, height: 20 }}
      o={0.3}
      br="$10"
      $sm={{ br: '$0' }}
      zi={0}
    />

    <YStack
      fullscreen
      shadowColor="$shadowColor"
      // $theme-dark={{
      //   shadowColor: '#000',
      //   shadowRadius: 40,
      // }}
      shadowRadius={40}
      shadowOffset={{ width: 0, height: 10 }}
      o={0.24}
      br="$10"
      $sm={{ br: '$0' }}
      zi={0}
    />

    <YStack
      bc="$backgroundStrong"
      br="$10"
      $sm={{ br: '$0' }}
      fullscreen
      zi={1}
      ov="hidden"
    >
      {children}
    </YStack>
  </YStack>
)

StudioSplashPage.getLayout = getDefaultLayout
