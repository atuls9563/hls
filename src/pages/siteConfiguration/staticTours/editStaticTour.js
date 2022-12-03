import { Breadcrumbs, Checkbox, Divider, Fab, Grid, InputAdornment, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../../../../styles/editStaticTour.module.css'
import { useTranslation } from 'react-i18next'

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd-next'

import { Filter } from 'mdi-material-ui'

// const getItems = {
//     first:10,
//     second:(5,10)
// }

const EditStaticTour = () => {
  const { t } = useTranslation()

//   const [items, setItems] = useState(getItems)
//   const [selected, setSelected] = useState(getItems)
//   const [display, setDisplay] = useState('')

//   const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list)
//     const [removed] = result.splice(startIndex, 1)
//     result.splice(endIndex, 0, removed)

//     return result
//   }

//   const move = (source, destination, droppableSource, droppableDestination) => {
//     const sourceClone = Array.from(source)
//     const destClone = Array.from(destination)
//     const [removed] = sourceClone.splice(droppableSource.index, 1)

//     destClone.splice(droppableDestination.index, 0, removed)

//     const result = {}
//     result[droppableSource.droppableId] = sourceClone
//     result[droppableDestination.droppableId] = destClone

//     return result
//   }

//   const grid = 8

//   const getItemStyle = (isDragging, draggableStyle) => ({
//     // some basic styles to make the items look a bit nicer
//     userSelect: 'none',
//     padding: grid * 2,
//     margin: `0 0 ${grid}px 0`,

//     // change background colour if dragging
//     background: isDragging ? 'gray' : 'grey',

//     // styles we need to apply on draggables
//     ...draggableStyle
//   })

//   const getListStyle = isDraggingOver => ({
//     background: isDraggingOver ? 'gray' : 'lightgrey',
//     padding: grid,
//     width: 250,
//     height: 300,
//     overflow: 'scroll'
//   })

//   const id2List = {
//     droppable: 'items',
//     droppable2: 'selected'
//   }

//   const getList = id => id2List[id]

//   const onDragEnd = result => {
//     const { source, destination } = result

//     // dropped outside the list
//     if (!destination) {
//       return
//     }

//     if (source.droppableId === destination.droppableId) {
//       const items = reorder(getList(source.droppableId), source.index, destination.index)

//       let state = { items }

//       if (source.droppableId === 'droppable2') {
//         state = { selected: items }
//       }

//       setDisplay(state)
//     } else {
//       const result = move(getList(source.droppableId), getList(destination.droppableId), source, destination)

//       setItems({ items: result.droppable })
//       setSelected({ selected: result.droppable2 })
//     }
//   }

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/staticTours'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Static Tours')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/staticTours/editStaticTour'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Edit A Static Tour')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Edit A Static Tour')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.4}className={styles.search}>
            <Typography variant='subtitle2' >
              {`${t('All Zones Assigned To This Site')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.5} className={styles.search}>
            <TextField
              size='small'
              fullWidth
              placeholder={`${t('Search')}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start' >
                    <Filter />
                    <Divider orientation='vertical' className={styles.divider3} />
                  </InputAdornment>
                ),
               
              }}
            />
          </Grid>
          {/* <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='droppable'>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                  {items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId='droppable2'>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                  {selected.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext> */}
          <Grid item xs={12} md={2.5}className={styles.searchTwo}>
            <Typography variant='subtitle2' >
              {`${t('All Zones Assigned To This Tour')}`}<span className={styles.aster}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.5} className={styles.searchTwo}>
            <TextField
              size='small'
              fullWidth
              placeholder={`${t('Search')}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start' >
                    <Filter />
                    <Divider orientation='vertical' className={styles.divider3} />
                  </InputAdornment>
                ),
               
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle' className={styles.heading}>
              {`${t('Tour Details')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t(
                'Note: If the tour crosses the midnight hour, the start time will fall on the day labeled on the column.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Tour Type')}`}</Typography>
            <Select size='small' fullWidth>
              <MenuItem value='select'>Select Officer</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Tour ID')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Tour Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('% Required')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Runs (Number of Runs in a week)')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Enabled')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Checkbox color='secondary' defaultChecked />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Task Required (A Task will be created when this tour will be Incomplete or Missed)')}`}
            </Typography>
            <Checkbox color='secondary' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.footer}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save Tour')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default EditStaticTour
