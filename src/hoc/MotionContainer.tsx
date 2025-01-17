import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { cn } from '../helpers/cn.helper';

const MotionContainer: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      className={cn('', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
