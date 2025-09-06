import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';


const CommentSection = ({ storyId, comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [showReplies, setShowReplies] = useState({});

  const handleSubmitComment = (e) => {
    e?.preventDefault();
    if (!newComment?.trim()) return;

    const comment = {
      id: Date.now(),
      author: {
        name: 'Usuário Anônimo',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      },
      content: newComment,
      timestamp: new Date(),
      likes: 0,
      replies: []
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleSubmitReply = (e, parentId) => {
    e?.preventDefault();
    if (!replyText?.trim()) return;

    const reply = {
      id: Date.now(),
      author: {
        name: 'Usuário Anônimo',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
      },
      content: replyText,
      timestamp: new Date(),
      likes: 0
    };

    setComments(comments?.map(comment => 
      comment?.id === parentId 
        ? { ...comment, replies: [...comment?.replies, reply] }
        : comment
    ));

    setReplyText('');
    setReplyTo(null);
  };

  const handleLike = (commentId, isReply = false, parentId = null) => {
    if (isReply) {
      setComments(comments?.map(comment => 
        comment?.id === parentId 
          ? {
              ...comment,
              replies: comment?.replies?.map(reply =>
                reply?.id === commentId 
                  ? { ...reply, likes: reply?.likes + 1 }
                  : reply
              )
            }
          : comment
      ));
    } else {
      setComments(comments?.map(comment => 
        comment?.id === commentId 
          ? { ...comment, likes: comment?.likes + 1 }
          : comment
      ));
    }
  };

  const toggleReplies = (commentId) => {
    setShowReplies(prev => ({
      ...prev,
      [commentId]: !prev?.[commentId]
    }));
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now - new Date(date)) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Agora mesmo';
    if (diffInMinutes < 60) return `${diffInMinutes}m atrás`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h atrás`;
    return `${Math.floor(diffInMinutes / 1440)}d atrás`;
  };

  return (
    <section className="mt-12">
      <div className="border-t border-border pt-8">
        <h3 className="font-headline text-2xl font-semibold text-foreground mb-6">
          Comentários ({comments?.length})
        </h3>

        {/* Comment Form */}
        <form onSubmit={handleSubmitComment} className="mb-8">
          <div className="mb-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e?.target?.value)}
              placeholder="Compartilhe sua opinião sobre esta história..."
              className="w-full p-4 border border-border rounded-lg resize-none focus:ring-2 focus:ring-accent focus:border-transparent"
              rows={4}
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Seja respeitoso e construtivo em seus comentários
            </p>
            <Button 
              type="submit" 
              variant="default"
              disabled={!newComment?.trim()}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Icon name="Send" size={16} className="mr-2" />
              Comentar
            </Button>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments?.map((comment) => (
            <div key={comment?.id} className="bg-card rounded-lg p-6 border border-border">
              {/* Comment Header */}
              <div className="flex items-start space-x-3 mb-4">
                <Image
                  src={comment?.author?.avatar}
                  alt={comment?.author?.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-foreground">{comment?.author?.name}</h4>
                    <span className="text-sm text-muted-foreground">
                      {formatTimeAgo(comment?.timestamp)}
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed">{comment?.content}</p>
                </div>
              </div>

              {/* Comment Actions */}
              <div className="flex items-center space-x-4 ml-13">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(comment?.id)}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Icon name="Heart" size={16} className="mr-1" />
                  {comment?.likes}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setReplyTo(replyTo === comment?.id ? null : comment?.id)}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Icon name="MessageCircle" size={16} className="mr-1" />
                  Responder
                </Button>

                {comment?.replies?.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleReplies(comment?.id)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Icon name="ChevronDown" size={16} className="mr-1" />
                    {showReplies?.[comment?.id] ? 'Ocultar' : 'Ver'} respostas ({comment?.replies?.length})
                  </Button>
                )}
              </div>

              {/* Reply Form */}
              {replyTo === comment?.id && (
                <form onSubmit={(e) => handleSubmitReply(e, comment?.id)} className="mt-4 ml-13">
                  <div className="mb-3">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e?.target?.value)}
                      placeholder="Escreva sua resposta..."
                      className="w-full p-3 border border-border rounded-lg resize-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      rows={3}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      type="submit" 
                      size="sm"
                      disabled={!replyText?.trim()}
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Responder
                    </Button>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setReplyTo(null)}
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              )}

              {/* Replies */}
              {showReplies?.[comment?.id] && comment?.replies?.length > 0 && (
                <div className="mt-4 ml-13 space-y-4">
                  {comment?.replies?.map((reply) => (
                    <div key={reply?.id} className="bg-muted/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Image
                          src={reply?.author?.avatar}
                          alt={reply?.author?.name}
                          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h5 className="font-medium text-foreground text-sm">{reply?.author?.name}</h5>
                            <span className="text-xs text-muted-foreground">
                              {formatTimeAgo(reply?.timestamp)}
                            </span>
                          </div>
                          <p className="text-foreground text-sm leading-relaxed">{reply?.content}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(reply?.id, true, comment?.id)}
                            className="text-muted-foreground hover:text-primary mt-2 p-0 h-auto"
                          >
                            <Icon name="Heart" size={14} className="mr-1" />
                            {reply?.likes}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Comments */}
        {comments?.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Icon name="ChevronDown" size={16} className="mr-2" />
              Carregar mais comentários
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentSection;