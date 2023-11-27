import TopicsList from '@/components/TopicList'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold"> WebDev Topics</h1>
      <p className="mb-4">Learning example of MongoDB CRUD</p>
      <TopicsList />
    </>
  )
}
