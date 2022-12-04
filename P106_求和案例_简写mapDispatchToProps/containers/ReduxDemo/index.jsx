// 引入ReduxDemo的UI组件
import ReduxDemo from '../../components/ReduxDemo';
// 引入connnect用于连接UI组件与redux
import { connect } from 'react-redux';
// 引入定义的actions
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/countAction';

// 使用connect()()创建并暴露一个RedexDemo的容器组件
export default connect(
    // mapStateToProps
    state => ({count: state}),

    // mapDispatchToProps的一般写法(函数)
    // dispatch => ({
    //     increment: num => dispatch(createIncrementAction(num)),
    //     decrement: num => dispatch(createDecrementAction(num)),
    //     incrementAsync: (num, time) => dispatch(createIncrementAsyncAction(num, time))
    // })

    // mapDispatchToProps的简写(对象，react-redux会自动进行分发(dispatch))
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(ReduxDemo);
