import Typography from "@material-ui/core/Typography";
import React, {useState} from "react"
import {Box, Grid, Hidden, makeStyles, TextField} from "@material-ui/core";
import CardMin from "../assets/images/card_min.png";
import Card from "../assets/images/card.png";
import CardMobile from "../assets/images/card-mobile.png";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

type Props = {};

const useStyle = makeStyles(theme => ({
    root: {
        minWidth: 300
    },
    identificationContainer: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
    },
    labelTxt: {
        color: '#b3b3b3'
    },
    textField: {
        color: 'white'
    },
    cvcCode: {
        color: '#b3b3b3'
    }
}))

const PaiementComponent: React.FC<Props> = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = useStyle();
    const [isValid, setIsValid] = useState(false);
    return (
        <div className={classes.root}>
            <Box>
                <Grid container spacing={2}>
                    <Grid
                        style={{
                            backgroundImage: matches ? `url("${Card}")` : `url("${CardMobile}")`,
                            minHeight: matches ? '286px' : '477px'
                        }}
                        className={classes.identificationContainer}
                        item
                        sm={10} xs={12}
                    >
                        <Box px={2} mt={15}>
                            <Typography
                                variant="button"
                                className={classes.labelTxt}
                            >
                                Number
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={3}>
                                    <TextField
                                        fullWidth
                                        inputProps={{ maxLength: 4 }}
                                        InputProps={{
                                            className: classes.textField
                                        }}
                                        label=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        fullWidth
                                        inputProps={{ maxLength: 4 }}
                                        InputProps={{
                                            className: classes.textField
                                        }}
                                        label=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        fullWidth
                                        inputProps={{ maxLength: 4 }}
                                        InputProps={{
                                            className: classes.textField
                                        }}
                                        label=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        fullWidth
                                        inputProps={{ maxLength: 4 }}
                                        InputProps={{
                                            className: classes.textField
                                        }}
                                        label=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={4}>
                                <Grid item sm={8} xs={12}>
                                    <Typography
                                        variant="button"
                                        className={classes.labelTxt}
                                    >
                                        Name
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        InputProps={{
                                            className: classes.textField
                                        }}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography
                                        variant="button"
                                        className={classes.labelTxt}
                                    >
                                        Expire date
                                    </Typography>
                                    <Box display="flex">
                                        <TextField
                                            type="number"
                                            inputProps={{ min: 0}}
                                            InputProps={{
                                                className: classes.textField
                                            }}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                        /
                                        <TextField
                                            type="number"
                                            inputProps={{ min: 0}}
                                            InputProps={{
                                                className: classes.textField
                                            }}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Box>
                                </Grid>
                                <Hidden smUp>
                                    <Grid item xs={12}>
                                        <Box>
                                            <Typography
                                                variant="button"
                                                className={classes.labelTxt}
                                            >
                                                CVC Code
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                inputProps={{ maxLength : 2 }}
                                                label=""
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Box>
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </Box>
                    </Grid>
                    <Hidden smDown>
                        <Grid item sm={2}>
                            <Box mt={20}>
                                <img src={CardMin} alt="Virtual card min"/>
                            </Box>
                            <Box>
                                <Typography
                                    variant="button"
                                    className={classes.labelTxt}
                                >
                                    CVC Code
                                </Typography>
                                <TextField
                                    fullWidth
                                    label=""
                                    inputProps={{ maxLength : 3 }}
                                    InputProps={{
                                        className: classes.cvcCode
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>
                        </Grid>
                    </Hidden>
                </Grid>
                <Box mt={4}>
                    {
                        isValid ? (
                            <Box mt={1}>
                                <a href="#">Supprimer ce moyen de paiement</a>
                            </Box>
                        ) : (
                            <Box mt={1}>
                                <Button variant="contained" color="primary">
                                    Enregistrer ce moyen de paiement
                                </Button>
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </div>
    )
}

export default PaiementComponent
