import { styled } from "@mui/material";

const ActionButtons = styled('div')(({theme}) => ({
    [theme.breakpoints.between('md', 'lg')]: {
        color: 'primary',
        gap: '1rem'
    },
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}));

export default ActionButtons;