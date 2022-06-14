import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button } from '@mui/material';
import './UserForm.css';
import SetRequiredLable from '../Component/SetRequiredLable';
import { useForm } from 'react-hook-form';

interface IUserDetails {
    name: string;
    email: string;
    address: string;
    // DOB: string;
    // phoneNumber: number;
}

export default function UserDetailsForm() {

    const { reset, register, handleSubmit, formState: { errors } } = useForm<IUserDetails>()

    const submitForm = () => {

    }

    return (
        <React.Fragment>
            <Box className='formContainer'>
                <Typography variant="h6" gutterBottom >
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit(submitForm)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="name"
                                name="name"
                                label={SetRequiredLable("Name")}
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                inputRef={() => register("name", {
                                    required: "This field is required."
                                })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                name="email"
                                label={SetRequiredLable("Email")}
                                fullWidth
                                autoComplete="email"
                                variant="standard"
                                inputRef={() => {
                                    register("email", {
                                        required: "This field is required."
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address"
                                name="address"
                                label={SetRequiredLable("Address")}
                                fullWidth
                                autoComplete="shipping address-line"
                                variant="standard"
                                inputRef={() => register("address", {
                                    required: "This field is required."
                                })}
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                        <TextField
                            id="address"
                            name="address"
                            label={SetRequiredLable("Address")}
                            fullWidth
                            autoComplete="shipping address-line"
                            variant="standard"
                            inputRef={() => register("address", {
                                required: "This field is required."
                            })}
                        />
                    </Grid> */}
                        {/* <Grid item xs={12} >
                        <TextField
                            id="address"
                            name="address"
                            label={SetRequiredLable("Address")}
                            fullWidth
                            autoComplete="shipping address-line"
                            variant="standard"
                            inputRef={() => register("address", {
                                required: "This field is required."
                            })}
                        />
                    </Grid> */}
                        <Grid item xs={12} sm={6} >
                            <Button color="secondary" onClick={() => {
                                reset()
                            }}>Reset</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button color="primary">Submit</Button>
                        </Grid>
                    </Grid>
                </form>

            </Box>
        </React.Fragment>
    );
}
