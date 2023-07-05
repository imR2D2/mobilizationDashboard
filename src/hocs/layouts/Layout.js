import { connect } from "react-redux";
import { motion } from 'framer-motion';


const Layout = ({children}) => {
    return (
        <motion.div className="dark:bg-slate-900"
        initial={{opacity: 0, transition:{duration:0}}}
        animate={{opacity: 1, transition:{duration:2}}}
        exit={{opacity: 0, transition:{duration:0}}}
        >
            {children}
        </motion.div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {}) (Layout)