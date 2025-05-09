import { motion } from 'framer-motion';

export default function BackgroundWrapper({ children }) {
  return (
    <motion.div
      animate={{
        backgroundColor: [
          'rgb(209, 214, 219)',
          'rgb(181, 193, 201)',
          'rgb(224, 235, 233)',
          'rgb(221, 212, 221)'
        ]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear'
      }}
      style={{
        minHeight: '100dvh', display: 'flex', flexDirection: 'column', overflow: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
}