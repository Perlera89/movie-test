import { Select, SelectItem } from '@nextui-org/react'
import { Calendar } from 'lucide-react'

const years = [
    { key: '2010', name: '2010' },
    { key: '2011', name: '2011' },
    { key: '2012', name: '2012' },
    { key: '2013', name: '2013' },
    { key: '2014', name: '2014' },
    { key: '2015', name: '2015' },
    { key: '2016', name: '2016' },
    { key: '2017', name: '2017' },
    { key: '2018', name: '2018' },
    { key: '2019', name: '2019' },
    { key: '2020', name: '2020' },
    { key: '2021', name: '2021' },
]

export default function SelectComponent() {
    return <Select
        className="max-w-xs"
        defaultSelectedKeys={['2010']}
        label="Favorite year"
        placeholder="Select year"
        startContent={<Calendar />}
    >
        {years.map((year) => (
            <SelectItem key={year.key}>{year.name}</SelectItem>
        ))}
    </Select>
}