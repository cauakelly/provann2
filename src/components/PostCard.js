import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body.substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          component={Link} 
          to={`/dados/${post.id}`}
          target="_blank"
        >
          Ver detalhes
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;