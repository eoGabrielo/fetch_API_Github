
export const metadata = {
  title: 'Painel do site',
  description: 'Painel de administração do site',
}   

export default function DashboardLayout({
    children,
}: {children: React.ReactNode}) {
    return(
        <>
        <h3>Header do dashboard</h3>
        <br />
        {children}
        </>
    )
}
















