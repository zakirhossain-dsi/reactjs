import {addColor, rateColor, removeColor} from '../color-organizer/actions';
import {AddColorForm} from './ui/AddColorForm';
import {ColorList} from './ui/ColorList';
import {findById, sortFunction} from './lib/array-helpers';
import {connect} from 'react-redux';
import {ColorDetails} from './ui/ColorDetails';

export const NewColor = connect(null, dispatch => ({
    onNewColor(title, color){
        dispatch(addColor(title, color))
    }
}))(AddColorForm);

const mapStateToProps = ({colors}, {match}) => ({
    colors: [...colors].sort(sortFunction(match.params.sort))
});

const mapDispatchToProps = dispatch => ({
    onRemove(id){
        dispatch(removeColor(id))
    },
    onRate(id, rating){
        dispatch(rateColor(id, rating))
    }
});

export const Colors = connect(mapStateToProps, mapDispatchToProps)(ColorList);

export const Color = connect((state, props) => findById(state.colors, props.match.params.id))(ColorDetails)