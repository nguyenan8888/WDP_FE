/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// ** Apis
import { reelApi } from 'src/@core/apis'
import toast from 'react-hot-toast'
import Box from '@mui/system/Box';
import ListReel from 'src/@core/components/list-reel';
import Fab from '@mui/material/Fab'
import Icon from 'src/@core/components/icon'

const Reels = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listReel, setListReel] = useState<any>()
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState<any>()
  const [page, setPage] = useState<number>(1)
  const router = useRouter();

  useEffect(() => {
    if (!page) return;
    fetchData(page);
  }, [page]);

  const fetchData = async (page: number) => {
    reelApi
    .reel(page)
    .then(({ data }) => {
      setListReel(data.data.reels)
      setTotalPage(data.data.totalPage)
    })
    .catch(err => {
      toast.error(err)
    })
    .finally(() => {
      setLoading(false);

      return;
    })
  };

  return (
    <div style={{width:'100%'}}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Box style={{display:'flex', justifyContent: 'space-between', alignItems: 'center', width:'100%'}}>
          <div>
            <Fab disabled={page === 1} onClick={() => setPage(page-1)} color='primary' aria-label='add' size='large'>
              <Icon icon='ic:outline-navigate-before' />
            </Fab>
          </div>
          <ListReel listData={listReel}/>
          <div>
            <Fab disabled={page === totalPage} onClick={() => setPage(page+1)} color='primary' aria-label='add' size='large'>
              <Icon icon='ic:outline-navigate-next' />
            </Fab>
          </div>
        </Box>
      )}
    </div>
  );
}

export default Reels;
