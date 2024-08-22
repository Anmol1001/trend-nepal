import CategoriesLayout from './CategoriesLayout'
import { dataC } from '../lib/data'
import { Button } from '../ui/button'

const Categories = () => {
  return <div className='container flex justify-between px-8'>
    {
        dataC.map((data)=>(
            <>
            <div className='group cursor-pointer' key={data.id}>
            <CategoriesLayout>
                <div className='group-hover:opacity-75 h-28 w-28'>
                    <img src={data.source} alt={data.alt}/>
                </div>
            </CategoriesLayout>
            <div>
                <a href="/"><Button variant='link' className='text-lg group-hover:underline'>{data.name}</Button></a>
            </div>
            </div>
            </>
        ))
    }
    </div>
  
}

export default Categories