import { Checkbox, Fieldset, Flex, FlexProps, MultiSelect, Text, RangeSlider, Select, Slider, TagsInput, useMantineTheme, Divider, Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';


export default function SearchPanel({ className }) {
    const theme = useMantineTheme();

    return (
        <Flex gap="lg"
            justify="center"
            align="flex-start"
            direction="column"
            className={className}
        >
            <Fieldset radius='lg'>
                <Select data={['One Way']} label='Flight Type' placeholder='Choose the flight type...' />
            </Fieldset>

            <Fieldset radius='lg'>
                <MultiSelect
                    label="Origin Airport"
                    placeholder="Select the origin airport..."
                    data={['Bergamo', 'Bologna']}
                    searchable
                    clearable
                    nothingFoundMessage="No airport with this name..."
                />
            </Fieldset>

            <Fieldset radius='lg'>
                <MultiSelect
                    label="Destination Airport"
                    placeholder="Select the destination airport..."
                    data={['Bergamo', 'Bologna']}
                    searchable
                    clearable
                    nothingFoundMessage="No airport with this name..."
                />
            </Fieldset>

            <Fieldset radius='lg'>
                <TagsInput label="Passengers' age"
                    placeholder="Type age and press Enter"
                    clearable
                    splitChars={[' ', ',']} />
            </Fieldset>

            <Fieldset radius='lg'>
                <Text size='sm'>Departure Date</Text>

                <Divider />

                <DatePicker type="multiple" />

                <Text size='sm' style={{ marginTop: theme.spacing.md }}>Departure Time</Text>

                <Divider />

                <RangeSlider minRange={1} marks={[{ value: 0, label: '00:00' }, { value: 12, label: '12:00' }, { value: 24, label: '23:59' }]}
                    min={0} max={24} step={1} defaultValue={[0, 24]}
                    labelAlwaysOn label={(value) => `${value === 24 ? 23 : value}:${value === 24 ? '59' : '00'}`}
                    style={{ marginTop: theme.spacing.xl, marginBottom: theme.spacing.lg }} />
            </Fieldset>

            <Fieldset radius='lg'>
                <Text size='sm'>Max Flight Duration</Text>

                <Slider marks={[{ value: 1, label: '1h' }, { value: 12, label: '12h' }, { value: 24, label: '24h' }]}
                    min={1} max={24} step={1} defaultValue={24}
                    labelAlwaysOn label={(value) => `${value}h`}
                    style={{ marginTop: theme.spacing.xl, marginBottom: theme.spacing.lg }} />
            </Fieldset>

            <Fieldset radius='lg'>
                <MultiSelect
                    label="Travel Companies"
                    placeholder="Select all the travel companies you would choose"
                    data={['Ryanair', 'Volotea']}
                    searchable
                    clearable
                    nothingFoundMessage="No travel company with this name..."
                />

                <hr />

                <Checkbox
                    defaultChecked
                    label="All travel companies"
                />
            </Fieldset>

            <Button variant="filled">Search</Button>
        </Flex>
    )
}