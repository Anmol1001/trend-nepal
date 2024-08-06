import { Search } from 'lucide-react'

const SearchCategories = () => {
  return (
    <div className='w-[860px] h-16 border-4 border-black flex flex-row py-4 rounded-tr-full rounded-br-full rounded-tl-full rounded-bl-full'>
        <Search className='w-[8%]'/>
        <input type="text" className='w-[75%] outline-none'/>
        <div className='w-[14%] bg-white h-full border-l-2'>
        <select name="All categories" id="categories" className='bg-white'>
            <option value="Art">Art</option>    
            <option value="Antiques" >Antiques</option>    
            <option value="Baby">Baby</option>    
            <option value="Book">Book</option>    
            <option value="Collectibles">Collectibles</option>    
            <option value="Craft">Craft</option>    
        </select>   
        </div>
    </div>
  )
}

export default SearchCategories