import { Button } from '@heroui/button'
import DefaultLayout from '@/layouts/default'
import user from '@/service/user.ts'

export default function DocsPage() {
  function Test() {
    user.connectionTest().then(r => console.error(r.data))
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1>Blog</h1>
          <Button color="primary" onClick={Test} className="mt-4">
            连接测试
          </Button>
        </div>
      </section>
    </DefaultLayout>
  )
}
