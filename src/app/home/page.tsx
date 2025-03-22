import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import { getServerSession } from 'next-auth'

export default async function Page() {
  const session = await getServerSession()
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <Separator orientation="vertical" className="mr-2 h-4" />
            {/* :: Add search here */}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* :: Add content here */}
          <div>{JSON.stringify(session)}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
