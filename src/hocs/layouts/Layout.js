import { connect } from "react-redux";
import { motion } from 'framer-motion';


const Layout = ({children}) => {
    return (
        <motion.div className="dark:bg-slate-900"
        initial={{opacity: 1, transition:{duration:0.1}}}
        animate={{opacity: 1, transition:{duration:0.1}}}
        exit={{opacity: 1, transition:{duration:0.1}}}
        >
            {children}
        </motion.div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

}) (Layout)