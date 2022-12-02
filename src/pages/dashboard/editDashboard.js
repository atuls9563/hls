import React from 'react'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Grid, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import styles from '../../../styles/editDashboard.module.css'
import { useTranslation } from 'react-i18next'
import Fab from '@mui/material/Fab'

const Editdashboard = () => {
  const { t } = useTranslation()

  return (
    <>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/dashboard/editDashboard'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Edit Dashboard')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Edit Dashboards')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={5.5}>
                <Typography variant='subtitle2' className={styles.heading}>
                  {`${t('Dashboard')}`}
                </Typography>
                <TextField
                  variant='outlined'
                  onChange={e => setName(e.target.value)}
                  fullWidth
                  size='small'
                  type='text'
                  placeholder={`${t('Profile')}`}
                  className={`${styles.input} `}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='subtitle2' className={styles.heading}>
                  {`${t('Template')}`}
                </Typography>
                <Select fullWidth size='small' displayEmpty>
                  <MenuItem>Select Template</MenuItem>
                  <MenuItem value='template'>Template</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider className={styles.divider1} />
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Grid item xs={12}>
                <Typography className={styles.heading} variant='subtitle2'>
                  {`${t('Widget 1')}`}
                </Typography>
                <Select fullWidth displayEmpty size='small'>
                  <MenuItem>None</MenuItem>
                  <MenuItem value='0'>
                    <em>Select</em>
                  </MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 1 Code')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('For Audits')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 1 Scope(Job/Tier)')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('Widget 1 (Job/Tier)')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Use Global Site')}`}
              </Typography>
              <FormControlLabel control={<Checkbox color='secondary' />} label={`${t('Use Global Site')}`} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider className={styles.divider} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Grid item xs={12}>
                <Typography variant='subtitle2' className={styles.heading}>
                  {`${t('Widget 2')}`}
                </Typography>
                <Select fullWidth size='small' displayEmpty>
                  <MenuItem>None</MenuItem>
                  <MenuItem value=''>Select</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 2 Code')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('For Audits')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 2 Scope(Job/Tier)')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('Widget 2 (Job/Tier)')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Use Global Site')}`}
              </Typography>
              <FormControlLabel control={<Checkbox color='secondary' />} label={`${t('Use Global Site')}`} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider className={styles.divider} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Grid item xs={12}>
                <Typography variant='subtitle2' className={styles.heading}>
                  {`${t('Widget 3')}`}
                </Typography>
                <Select fullWidth displayEmpty size='small'>
                  <MenuItem>None</MenuItem>
                  <MenuItem value=''>Select</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 3 Code')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('For Audits')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 3 Scope(Job/Tier)')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('Widget 3 (Job/Tier)')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Use Global Site')}`}
              </Typography>
              <FormControlLabel control={<Checkbox color='secondary' />} label={`${t('Use Global Site')}`} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider className={styles.divider} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Grid item xs={12}>
                <Typography variant='subtitle2' className={styles.heading}>
                  {`${t('Widget 4')}`}
                </Typography>
                <Select fullWidth displayEmpty size='small'>
                  <MenuItem>None</MenuItem>
                  <MenuItem value=''>Select</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 4 Code')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('For Audits')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 4 Scope(Job/Tier)')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('Widget 4 (Job/Tier)')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Use Global Site')}`}
              </Typography>
              <FormControlLabel control={<Checkbox color='secondary' />} label={`${t('Use Global Site')}`} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider className={styles.divider} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Grid item xs={12}>
                <Typography variant='subtitle2' className={styles.heading}>
                  {`${t('Widget 5')}`}
                </Typography>
                <Select fullWidth size='small' displayEmpty>
                  <MenuItem>None</MenuItem>
                  <MenuItem value=''>Select</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 5 Code')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('For Audits')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 5 Scope(Job/Tier)')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('Widget 5 (Job/Tier)')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Use Global Site')}`}
              </Typography>
              <FormControlLabel control={<Checkbox color='secondary' />} label={`${t('Use Global Site')}`} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider className={styles.divider} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Grid item xs={12}>
                <Typography variant='subtitle2' className={styles.heading}>
                  {`${t('Widget 6')}`}
                </Typography>
                <Select fullWidth size='small' displayEmpty>
                  <MenuItem>None</MenuItem>
                  <MenuItem value={0}>Select</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 6 Code')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('For Audits')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Widget 6 Scope(Job/Tier)')}`}
              </Typography>
              <TextField
                variant='outlined'
                label={`${t('Widget 6 (Job/Tier)')}`}
                onChange={e => setName(e.target.value)}
                fullWidth
                size='small'
                type='text'
                className={`${styles.input} `}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Use Global Site')}`}
              </Typography>
              <FormControlLabel control={<Checkbox color='secondary' />} label={`${t('Use Global Site')}`} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider className={styles.divider} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab color='secondary' variant='extended' size='medium' className={styles.button}>
                {`${t('Update')}`}
              </Fab>
              <Fab color='secondary' variant='extended' size='medium' className={styles.button}>
                {`${t('Cancel')}`}
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default Editdashboard
