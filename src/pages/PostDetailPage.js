import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Typography, 
  Paper, 
  Box, 
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { fetchPostDetails, fetchUserDetails } from '../services/api';

const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const postData = await fetchPostDetails(id);
        setPost(postData);
        
        const userData = await fetchUserDetails(postData.userId);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPostDetails();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" sx={{ mt: 4 }}>
        Error: {error}
      </Typography>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.body}
      </Typography>
      
      <Divider sx={{ my: 3 }} />
      
      {user && (
        <>
          <Typography variant="h5" gutterBottom>
            Author Information
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={user.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Username" secondary={user.username} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={user.email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Phone" secondary={user.phone} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Website" secondary={user.website} />
            </ListItem>
          </List>
        </>
      )}
    </Paper>
  );
};

export default PostDetailPage;