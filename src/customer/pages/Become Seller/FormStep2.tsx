import React from 'react';
import {Box, Grid2, TextField} from "@mui/material";

const FormStep2 = ({formik}: any) => {
    return (
        <Box>
            {/*<p className='text-xl font-bold text-center pb-5'>pickup address</p>*/}

            <form>
                <Grid2 container spacing={4}>
                    <Grid2 size={{xs: 12}}>
                        <TextField
                            fullWidth
                            name='name'
                            label='Name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />

                    </Grid2>

                    <Grid2 size={{xs: 6}}>
                        <TextField
                            fullWidth
                            name='mobile'
                            label='Mobile'
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                            helperText={formik.touched.mobile && formik.errors.mobile}
                        />

                    </Grid2>

                    <Grid2 size={{xs: 6}}>
                        <TextField
                            fullWidth
                            name='pinCode'
                            label='Pincode'
                            value={formik.values.pinCode}
                            onChange={formik.handleChange}
                            error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                            helperText={formik.touched.pinCode && formik.errors.pinCode}
                        />

                    </Grid2>

                    <Grid2 size={{xs: 12}}>
                        <TextField
                            fullWidth
                            name='address'
                            label='Address'
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />

                    </Grid2>


                    <Grid2 size={{xs: 12}}>
                        <TextField
                            fullWidth
                            name='locality'
                            label='Name'
                            value={formik.values.locality}
                            onChange={formik.handleChange}
                            error={formik.touched.locality && Boolean(formik.errors.locality)}
                            helperText={formik.touched.locality && formik.errors.locality}
                        />

                    </Grid2>

                    <Grid2 size={{xs: 6}}>
                        <TextField
                            fullWidth
                            name='city'
                            label='City'
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />

                    </Grid2>

                    <Grid2 size={{xs: 6}}>
                        <TextField
                            fullWidth
                            name='state'
                            label='State'
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                            helperText={formik.touched.state && formik.errors.state}
                        />

                    </Grid2>



                </Grid2>
            </form>
        </Box>
    );
};

export default FormStep2;
