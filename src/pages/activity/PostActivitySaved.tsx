import { Box, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { postApi } from "src/@core/apis";

const PostActivitySaved = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    ;(async () => {
      const {
        data: {
          isSuccess,
          data: { posts: data }
        }
      } = await postApi.getPostSaved()

      if (!isSuccess) return toast.error('Failed to fetch posts')
      setPosts(data)
        setLoading(false);
    })()
  }, [])

  return <Box sx={{ display: 'flex', gap: '4px' }}>
  {loading && (
    <div style={{ width: '100%' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </div>
  )}
  {posts.map((post: any) => (
    <div key={post._id} style={{ width: '20%', cursor: 'pointer' }}>
      <img src={post.images[0]} alt={post.content} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  ))}
</Box>
}

export default PostActivitySaved
