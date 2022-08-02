
import Link from "next/link";
import { BookOpenIcon, CubeIcon, DocumentTextIcon, StarIcon, TemplateIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Nav = () => {
    const router = useRouter()
    const routes = [
        {
            id: 0,
            name: "Overview",
            path: "/",
            icon: BookOpenIcon,
            count: 0
        },
        {
            id: 1,
            name: "Repositories",
            path: "/repositories",
            icon: DocumentTextIcon,
            count: 30
        },
        {
            id: 2,
            name: "Projects",
            path: "/projects",
            icon: TemplateIcon,
            count: 0
        },
        {
            id: 3,
            name: "Packages",
            path: "/packages",
            icon: CubeIcon,
            count: 0
        },
        {
            id: 4,
            name: "Stars",
            path: "/stars",
            icon: StarIcon,
            count: 0
        },
    ]
    return (
        <div className="flex justify-center items-center border-b border-gray-800 mt-8">
            <ul className="flex items-center gap-3">
                {
                    routes?.map(route => <li key={route.id}>
                        <Link href={route.path}>
                            <a className={`flex items-center gap-2 hover:bg-gray-800 cursor-pointer py-1 px-2 rounded relative my-2  ${router.pathname === route.path ? " after:contents[''] after:h-[2px] after:bg-orange-600 after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:w-full" : ""}`}>
                                <route.icon className="w-5 h-5 text-gray-500" />
                                <span className="text-sm text-gray-300 font-bold">{route.name}</span>
                                {
                                    !route.count || <span className="text-[12px] text-gray-200 bg-gray-700 rounded-full px-2">{route.count || ""}</span>
                                }

                            </a>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Nav;
