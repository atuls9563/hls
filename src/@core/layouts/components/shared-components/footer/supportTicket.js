import React from 'react'
import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Fab from '@mui/material/Fab'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Receipt from 'mdi-material-ui/Receipt'
import { Close } from 'mdi-material-ui/'
import Checkbox from '@mui/material/Checkbox'
import { useTranslation } from 'react-i18next'

// ** Icons Imports
import styles from '../../../../../../styles/supportTicket.module.css'
import { Paper } from '@mui/material'

const SupportTicket = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {

  const { t } = useTranslation();

  const initialValue = {
    name: '',
    email: '',
    contact: '',
    subject: '',
    site: '',
    notRelated: false,
    issue: ''
  }

  const [disabledCheck, setDisabledCheck] = useState(false)
  const [content, setContent] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  // Handle Edit dialog
  const handleChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type == 'checkbox' ? target.checked : target.value
    setContent({ ...content, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setFormErrors(validate(content))
    setIsSubmit(true)
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors])

  const validate = values => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.name) {
      errors.name = 'Name is required!'
    }
    if (!values.email) {
      errors.email = 'Email is required!'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!'
    }
    if (!values.contact) {
      errors.contact = 'Contact is required'
    } else if (values.contact.length < 10) {
      errors.contact = 'Contact must be more than 10 characters'
    } else if (values.contact.length > 12) {
      errors.contact = 'Contact cannot exceed more than 12 characters'
    }
    if (!values.subject) {
      errors.subject = 'Subject is required!'
    }
    if (!values.issue) {
      errors.issue = 'issue is required!'
    }

    return errors
  }

  function SubmitButton() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    const reg = regex.test(content.email)

    const regexOne = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm

    const regOne = regexOne.test(content.site)

    if (
      content.name.length > 1 &&
      reg &&
      content.contact.length >= 10 &&
      content.subject.length >= 4 &&
      content.issue.length >= 2 &&
      (regOne || content.notRelated)
    ) {
      
      return (
        <Fab
          color='secondary'
          variant='extended'
          type='submit'
          onClick={handleSubmit}
          size='small'
          className={styles.button}
        >
          {`${t('Submit')}`}
        </Fab>
      )
    } else {
      return (
        <Fab color='secondary' variant='extended' size='medium' disabled className={styles.button}>
          {`${t('Submit')}`}
        </Fab>
      )
    }
  }
  
  return (
    <>
      <Dialog open={openEdit} onClose={handleEditClose} >
        <Paper className={styles.containerModal}>
          <div className={styles.heading}>
            <Receipt className={styles.icon2} />
            <DialogTitle className={styles.title}> {`${t('CREATE A SUPPORT TICKET')}`}</DialogTitle>
            <Close onClick={handleEditClose} className={styles.icon} />
          </div>
          <Divider />
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('Name')}`}
                  </Typography>
                  <TextField
                    size='small'
                    type='text'
                    fullWidth
                    placeholder='Name'
                    value={content.name}
                    name='name'
                    onChange={handleChange}
                  />
                  <p>{formErrors.name}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('Email')}`}
                  </Typography>
                  <TextField
                    size='small'
                    type='email'
                    onChange={handleChange}
                    fullWidth
                    placeholder={`${t('Email')}`}
                    name='email'
                    value={content.email}
                  />
                  <p>{formErrors.email}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('Contact No.')}`}
                  </Typography>
                  <TextField
                    size='small'
                    value={content.contact}
                    fullWidth
                    type='number'
                    name='contact'
                    onChange={handleChange}
                  />
                  <p>{formErrors.contact}</p>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant='subtitle2' className={styles.heading1}>
                    {`${t('Subject')}`} <span className={styles.aster}>*</span>
                  </Typography>
                  <TextField
                    name='subject'
                    value={content.subject}
                    onChange={handleChange}
                    size='small'
                    type='text'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('Site')}`}
                  </Typography>
                  <TextField
                    size='small'
                    onChange={disabledCheck ? null : handleChange}
                    type='text'
                    fullWidth
                    name='site'
                    disabled={disabledCheck}
                    value={disabledCheck ? content.site == '' : content.site}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('Not related to specific site')}`}
                  </Typography>
                  <Checkbox
                    onClick={() => setDisabledCheck(!disabledCheck)}
                    onChange={handleChange}
                    name='notRelated'
                    checked={content.notRelated}
                    color='secondary'
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('Issue')}`}
                  </Typography>
                  <TextField
                    multiline
                    rows={2}
                    onChange={handleChange}
                    value={content.issue}
                    className={styles.textarea}
                    name='issue'
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={styles.footer}>
              <SubmitButton />
            </DialogActions>
          </form>
        </Paper>
      </Dialog>
    </>
  )
}

export default SupportTicket
