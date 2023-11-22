import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { staggerContainer } from '../utils/motion'
import { useState,useEffect } from 'react'

const SecWrap = (Component, idName) =>
    function HOC(params) {
        const [mob, setmob] = useState(false)

        useEffect(() => {
            const meadiaquery = window.matchMedia('(max-width:500px)');
            setmob(meadiaquery.matches);

            const handle = (e) => (setmob(e.matches));

            meadiaquery.addEventListener('change', handle)

            return () => {
                meadiaquery.removeEventListener('change', handle)
            }

        }, []);
        
        if (mob) {

            return (
                <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                    <Component />
                </section>
            )
            
        } else {
            
        

        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount:mob?0: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <Component />
            </motion.section>
        )
    }
    }

export default SecWrap;