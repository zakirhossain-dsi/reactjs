import React from 'react';
import PropTypes from 'prop-types';
import {addColor, rateColor, removeColor, sortColors} from "../ch8/actions";
import SortMenu from "./ui/SortMenu";
import {AddColorForm} from "./ui/AddColorForm";
import {ColorList} from "./ui/ColorList";
import {sortFunction} from "../lib/array-helpers";

export const Menu = (props, {store}) =>
    <SortMenu sort={store.getState().sort} onSelect={sortBy => store.dispatch(sortColors(sortBy))} />;

export const NewColor = (props, {store}) =>
    <AddColorForm onNewColor={(title, color) => store.dispatch(addColor(title, color))}/>;

export const Colors = (props, {store}) => {
        const { colors, sort} = store.getState();
        const sortedColors = [...colors].sort(sortFunction(sort));
        return <ColorList sortedColors={sortedColors}
                   onRemove={ id => store.dispatch(removeColor(id)) }
                   onRate={(id, rating) => store.dispatch(rateColor(id, rating))} />;
    };

Menu.contextTypes = { store: PropTypes.object };
NewColor.contextTypes = { store: PropTypes.object };
Colors.contextTypes = { store: PropTypes.object };

