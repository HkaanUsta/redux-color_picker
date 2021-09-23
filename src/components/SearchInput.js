import {Button, Flex, Input} from '@chakra-ui/react'
import {useDispatch} from 'react-redux'
import {setFilterText} from '../redux/todoSlice'
import {useState} from 'react'

const SearchInput = () => {
  const [search,setSearch] = useState("")
  const dispatch = useDispatch()

  return (
      <Flex w="80%" alignItems="baseLine" justifyContent={"center"}>
        <Input flex="1" mr={5} onChange={(e)=> setSearch(e.target.value) } w={"80%"} mt={5} placeholder={"Search"}/>
        <Button onClick={()=> dispatch(setFilterText(search))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></Button>
      </Flex>
  );
};

export default SearchInput;