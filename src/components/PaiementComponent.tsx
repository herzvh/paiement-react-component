import Typography from "@material-ui/core/Typography";
import React from "react"
import {Box, Grid, Hidden, makeStyles, TextField} from "@material-ui/core";
import CardMin from "../assets/images/card_min.png";
import Card from "../assets/images/card.png";

type Props = {};

const useStyle = makeStyles(theme => ({
    root: {
        minWidth: 300
    },
    identificationContainer: {
        backgroundImage: `url("${Card}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '286px'
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
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Box>
                <Grid container spacing={2}>
                    <Grid
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
                                        type="number"
                                        fullWidth
                                        InputProps={{
                                            className: classes.textField
                                        }}
                                        label=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        type="number"
                                        fullWidth
                                        InputProps={{
                                            className: classes.textField
                                        }}
                                        label=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        type="number"
                                        fullWidth
                                        InputProps={{
                                            className: classes.textField
                                        }}
                                        label=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        type="number"
                                        fullWidth
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
                                            InputProps={{
                                                className: classes.textField
                                            }}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                        /
                                        <TextField
                                            type="number"
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
                                                type="number"
                                                fullWidth
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
                                    type="number"
                                    fullWidth
                                    label=""
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
                    <a href="#">Supprimer ce moyen de paiement</a>
                </Box>
            </Box>
        </div>
    )
}

export default PaiementComponent
