import React from 'react'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Grid, Typography } from '@mui/material'
import styles from '../../styles/privacy.module.css'
import { useTranslation } from 'react-i18next'

const PrivacyPolicy = () => {
  const { t } = useTranslation()

  return (
    <>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/privacyPolicy'>
          <Typography variant='subtitle' className={styles.link}>{`${t(' Privacy Policy')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.header} variant="outlined" >
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography className={styles.heading} variant='h5'>
              Privacy Policy
            </Typography>
            <Typography className={styles.paragraph}>
              Allied Universal ("we" or "us") respects and understands its customers' concerns about confidentiality and
              privacy, and we take reasonable steps to ensure that any information you give us is handled in a safe and
              responsible manner. Because of our respect and understanding, we have developed this Privacy Policy which
              discloses the privacy practices of Allied Universal and describes the information we collect about you
              during your use of the Website and what use we may make of that information.
              <br />
              <br />
              It is important to remember that by using our Website, you agree to the terms of this Privacy Policy. We
              suggest that you refer to this Privacy Policy on a regular basis as it may change, at any time in Allied
              Universal's sole discretion, in order to allow us to take advantage of technological advances or for
              business purposes or legal reasons.
            </Typography>
            <Typography className={styles.subHeading} variant='h6'>
              Information Collection and Usage
            </Typography>
            <Typography className={styles.paragraph}>
              We do not sell, lend or rent any personally identifiable information about you to any third parties
              outside of the Company, its affiliates, subsidiaries, authorized agents and service providers, operating
              companies and other related entities.
              <br />
              <br />
              If you supply us with your e-mail or mailing address, you may receive occasional mail from us announcing
              services or promotional events. If you do not wish to receive such mailings, please send us an e-mail to
              <Link href='https:/info@aus.com'>
                <a className={styles.link}> info@aus.com </a>
              </Link>
              indicating your e-mail address or mailing address as applicable and asking us to remove you from our
              mailing list.
              <br />
              <br />
              We can (and you authorize us to) disclose any information about you as required by law, including
              voluntary disclosures to law enforcement agencies and government officials, as we, in our sole discretion,
              believe necessary or appropriate.
              <br />
              <br />
              In the event the Company is ever sold, we reserve the right to transfer ownership of our e-mail list and
              other personally identifiable information to the acquiring company. Should this happen, we will instruct
              the new owners of the company to contact users via e-mail to notify you of the change.
              <br />
              <br />
              Unfortunately, due to the existing regulatory environment, we cannot ensure that information will never be
              disclosed in ways not otherwise described in this Privacy Policy. By way of example (without limiting the
              foregoing), third parties may unlawfully intercept or access files, transmissions or private
              communications. Therefore, although we use industry standard practices to protect information, we do not
              promise, and you should not expect, that your personally identifiable information or private
              communications will always remain private.
              <br />
              <br />
            </Typography>

            <Typography className={styles.subHeading}>Third Party Collectors of Information</Typography>
            <Typography className={styles.paragraph}>
              Our Privacy Policy only addresses the use and disclosure of information we collect from you. To the extent
              that your information is disclosed by you to third parties, whether our clients, service providers,
              advertisers or other sites throughout the Internet, different rules may apply to their use or disclosure
              of your information. These third parties adhere to their own privacy customs and policies. Because we do
              not control the privacy policies of third parties, you are subject to the privacy customs and policies of
              that third party. We do not make any representations or warranties as to how such third parties may use
              your information.
            </Typography>
            <br />

            <Typography className={styles.subHeading}>Notification of Material Changes to this Policy</Typography>

            <Typography className={styles.paragraph}>
              This Section identifies material changes to this Policy since the Effective Date.
              <br />
              None at present.
            </Typography>
            <br />

            <Typography className={styles.subHeading}>Contacting Us</Typography>

            <Typography className={styles.paragraph}>
              If you have any questions about this Privacy Policy, or if you would like to review, change or remove your
              personal information, you can e-mail us at
              <Link href='https:/info@aus.com'>
                <a className={styles.link}> info@aus.com </a>
              </Link>
              .
            </Typography>

            <Typography className={styles.paragraph}>Additionally, you can contact us by writing to:</Typography>
            <Typography className={styles.paragraph}>
              Allied Universal, 8 Tower Bridge, 161 Washington Street, Suite 600, Conshohocken, PA 19428.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default PrivacyPolicy
