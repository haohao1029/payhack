import { Heading } from '@chakra-ui/react'



export default function AdminChart() {
  return (
    <>
      <Heading>
        Hotel Eleanor
      </Heading>
      <Line options={options} data={data} className="h-[10rem]" />
    </>
  )
}
