// debug-verbose
// import './wdyr'

import { Check } from '@tamagui/lucide-icons'
import { Button, Checkbox, Popover, YStack } from 'tamagui'

export const Sandbox = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <Button>Trigger</Button>
      </Popover.Trigger>
      <Popover.Content key="content" borderWidth={1} borderColor="$borderColor">
        <Checkbox size="$4">
          <Checkbox.Indicator enterStyle={{ scale: 0 }} animation="bouncy">
            <Check />
          </Checkbox.Indicator>
        </Checkbox>
      </Popover.Content>
    </Popover>
  )
}
