import { Grid } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

// ** Config
import authConfig from 'src/configs/auth'
import Image from 'next/image'
import Link from 'next/link' 
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import { useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import { useState } from 'react'
import styles from '../../../styles/login.module.css'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const LoginPage = props => {
  const { settings, saveSettings, toggleNavVisibility } = props
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { t } = useTranslation()

  // ** Vars
  //  const { skin } = settings
  //  const { layout } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, password } = data

    auth.login({ email, password }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }

  return (
    <Grid container  className={styles.container}>
      <Grid item xs={12} md={6} classnamne={styles.left_image}>
        {/* <img src={heliausLogo} alt="Heli"/> */}
        <img src="../../images/heliauslogo.png" alt='Helia' width='500' height='100' />        
      </Grid>
      <Grid item xs={12} lg={5.4} md={5.4} xl={5.4} className={styles.right_header}>
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='subtitle1' gutterBottom component='div' className={styles.title1}>
            {`${t('Clients and Employees sign in below')}`}
          </Typography>
          <FormControl fullWidth>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  autoFocus
                  size='small'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.email)}
                  placeholder={t('Username')}
                  type='text'
                  fullWidth
                  className={styles.user}
                  disableUnderline
                />
              )}
            />
            {errors.email && <FormHelperText className={styles.error}>{errors.email.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth>
            <Controller
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  size='small'
                  className={styles.password}
                  value={value}
                  onBlur={onBlur}
                  disableUnderline
                  onChange={onChange}
                  placeholder={t('Password')}
                  fullWidth
                  id='auth-login-v2-password'
                  error={Boolean(errors.password)}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        className={styles.icon}
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.password && <FormHelperText className={styles.error}>{errors.password.message}</FormHelperText>}
          </FormControl>

          <Link href='https://heliaus.aus.com/forgot_password_v2.php'>
            <Typography variant='subtitle1' component='div' className={styles.forgot}>
              <a className={styles.lang}>
                <>{`${t('Forgot your password?')}`}</>
              </a>
            </Typography>
          </Link>
          <Button size='small' variant='contained' className={styles.button1} type='submit'>
            <>{`${t('SIGN IN')}`}</>
          </Button>
        </form>
        <Typography variant='subtitle1' className={styles.title2}>
          {`${t('Having Trouble? Contact support at +1 770-625-1467 or open a support ticket by')}`}
          &nbsp;
          <span className={styles.title3}>
            <a className={styles.lang} href='https://heliaus.aus.com/supportticket.php'>
              {`${t('clicking here')}`}
            </a>
          </span>
          &nbsp;..
        </Typography>
        <hr className={styles.horizontal} />

        <Button variant='contained' className={styles.button2} href={authConfig.ssoLoginUrl}>
          {`${t('AUS Employees Login here using Single Sign-On')}`}
          &nbsp;
        </Button>


        <br />

        <LanguageDropdown settings={settings} saveSettings={saveSettings} layout='horizontal' theme='light' />

        <Typography variant='subtitle1' className={styles.footer}>
          {`${t('SOFTWARE LICENSE DISCLOSURE: This software is subject to a License from Allied Universal.')}`}
          {`${t(
            "No part of this software can be altered, modified, copied or used without a prior written permission of Allied Universal, or unless expressly authorized by Heliaus's Software License."
          )}`}
          {`${t(
            'All other License Terms shall apply. ©Allied Universal. All Rights Reserved. Confidential and Proprietary.'
          )}`}
        </Typography>
      </Grid>
    </Grid>
  )
}
LoginPage.guestGuard = true
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
