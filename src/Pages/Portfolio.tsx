import AppLayout from '@/Layouts/AppLayout'
import AboutMe from '@/Pages/AboutMe'
import Contact from '@/Pages/Contact'
import Experience from '@/Pages/Experience'

export default function Portfolio() {
    return (
        <AppLayout>
            <AboutMe />
            <Experience />
            <Contact />
        </AppLayout>
    )
}
