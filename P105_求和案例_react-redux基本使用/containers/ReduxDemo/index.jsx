// 引入ReduxDemo的UI组件
import ReduxDemo from '../../components/ReduxDemo';
// 引入connnect用于连接UI组件与redux
import { connect } from 'react-redux';
// 引入定义的actions
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/countAction';

/**
 * 1.mapStateToProps函数返回的是一个对象
 * 2.返回对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 * 3.mapStateToProps用于传递状态
 */
function mapStateToProps(state) {
    return {count: state};
}

/**
 * 1.mapDispatchToProps函数返回的是一个对象
 * 2.返回对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 * 3.mapDispatchToProps用于传递操作状态的方法
 */
function mapDispatchToProps(dispatch) {
    return {
        increment: num => dispatch(createIncrementAction(num)),
        decrement: num => dispatch(createDecrementAction(num)),
        incrementAsync: (num, time) => dispatch(createIncrementAsyncAction(num, time))
    };
}

// 使用connect()()创建并暴露一个RedexDemo的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);
