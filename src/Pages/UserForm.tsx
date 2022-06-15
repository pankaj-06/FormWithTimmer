import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import './UserForm.css';
import SetRequiredLable from '../Component/SetRequiredLable';
import { useForm } from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { messages } from '../Massages/messages';


interface IUserDetails {
    name: string;
    email: string;
    address: string;
    DOB: string;
    phoneNumber: number;
}


export default function UserDetailsForm() {
    const [selectedDate, setSelectedDate] = React.useState<string | null>(null);
    const { reset, register, handleSubmit, formState: { errors, }, getValues, setValue } = useForm<IUserDetails>()

    const submitForm = (data: IUserDetails) => {
        console.log("====data====", data);

    }

    return (
        <React.Fragment>
            <Box className='formContainer'>
                <form onSubmit={handleSubmit(submitForm)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                {...register("name", {
                                    required: messages.required,
                                    pattern: {
                                        value: /^[a-zA-Z ]*$/,
                                        message: messages.validName
                                    }
                                })}
                                id="name"
                                name="name"
                                label={SetRequiredLable("Name")}
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                error={errors.name ? true : false}
                                helperText={errors.name && errors.name.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register("email", {
                                    required: messages.required,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: messages.validEmail
                                    }
                                })}
                                id="email"
                                name="email"
                                label={SetRequiredLable("Email")}
                                fullWidth
                                autoComplete="email"
                                variant="standard"
                                error={errors.email ? true : false}
                                helperText={errors.email && errors.email.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register("address", {
                                    required: messages.required
                                })}
                                id="address"
                                name="address"
                                label={SetRequiredLable("Address")}
                                fullWidth
                                autoComplete="shipping address-line"
                                variant="standard"
                                error={errors.address ? true : false}
                                helperText={errors.address && errors.address.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label={SetRequiredLable("DOB")}
                                    inputFormat='MM/dd/yyyy'
                                    onChange={(value: string | null, keyboardInputValue?: string | undefined) => {
                                        setSelectedDate(value)
                                    }}
                                    value={selectedDate}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            {...register("DOB", {
                                                required: messages.required
                                            })}
                                            fullWidth
                                            variant={'standard'}
                                            error={errors.DOB && !selectedDate ? true : false}
                                            helperText={errors.DOB && !selectedDate && errors.DOB.message}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                {...register("phoneNumber", {
                                    required: messages.required
                                })}
                                id="phoneNumber"
                                name="phoneNumber"
                                label={SetRequiredLable("Phone Number")}
                                type="tel"
                                fullWidth
                                variant="standard"
                                error={errors.phoneNumber ? true : false}
                                helperText={errors.phoneNumber && errors.phoneNumber.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <Button color="secondary" onClick={() => {
                                reset()
                            }}>Reset</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button color="primary" type='submit'>Submit</Button>
                        </Grid>
                    </Grid>
                </form>

            </Box>
        </React.Fragment>
    );
}
