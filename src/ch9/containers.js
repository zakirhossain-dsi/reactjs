import React from 'react';
import {addColor, rateColor, removeColor, sortColors} from "../ch8/actions";
import SortMenu from "./ui/SortMenu";
import {AddColorForm} from "./ui/AddColorForm";
import {ColorList} from "./ui/ColorList";
import {sortFunction} from "../lib/array-helpers";
import {connect} from "react-redux";

export const Menu = connect(state => ({sort: state.sort}), dispatch => ({
    onSelect: sortBy => dispatch(sortColors(sortBy))
}))(SortMenu);

export const NewColor = connect(null, dispatch => ({
    onNewColor(title, color){
        dispatch(addColor(title, color))
    }
}))(AddColorForm);

const mapStateToProps = state => ({
   colors: [...state.colors].sort(sortFunction(state.sort))
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
