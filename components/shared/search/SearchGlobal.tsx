import Image from 'next/image';
import { Input } from "@/components/ui/input"


const SearchGlobal = () => {
    return (
        <div className="relative w-full max-w-[600px] max-lg:hidden">
            <div className="background-light800_darkgradiant relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
                <Image src="/assets/icons/search.svg" alt="search" width={24} height={24} className="cursor-pointer"/>
                <Input/>
            </div>
        </div>
    )
}

export default SearchGlobal;