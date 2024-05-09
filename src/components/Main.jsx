import React, { useContext, useState, useEffect } from 'react'
import { Home, Info, User, Trash, LogOut, Heart, LikedHeart,WhiteAdd, Add, Search, Edit, Filter, DownArrow, Tick } from '../assets/icons/icons';
import UserContext from '../context/notes/userContext';
import noteContext from '../context/notes/noteContext';
import Bullet from './Bullet';
import DeleteModal from './DeleteModal';
import EditModal from './EditNoteModal';
import Fuse from 'fuse.js'


export default function Main(props) {
  const userContext = useContext(UserContext);
  const contextNote = useContext(noteContext);
  const { setFilters, filters, displayNotes, setDisplayNotes, notes, setNotes, addNote, deleteNote, editNote, fetchAllNotes, likeNote } = contextNote
  const { currentTags, createTag, fetchTags, login, signup, logout } = userContext;
  const {active, setActive, isAddModalOpen, setIsAddModalOpen}= props;
  const [dropdown, setDropdown] = useState(false);
  const [doubleDropdown, setDoubleDropdown] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [note, setNote] = useState({});
  const [search, setSearch] = useState("")
  const IMAGES = {
    noNotes: new URL('../assets/images/noNotes.jpg', import.meta.url).href
  }

  const fuseOptions = {
    isCaseSensitive: false,
    shouldSort: true,
    findAllMatches: false,
    minMatchCharLength: 3,
    keys: [
      "title"
    ]
  };

  const fuse = new Fuse(notes, fuseOptions);

  const handleSearch = (search) => {
    let searchResult = fuse.search(search);
    let newNotes = []
    for (let index = 0; index < searchResult.length; index++) {
      const note = searchResult[index].item;
      newNotes.push(note)
    }
    setDisplayNotes(newNotes)
  }

  const handleClick = (value) => {
    setFilters({ ...filters, tag: value })
    setActive(value)
  }

  const handleLike = (note, like) => {
    let value = !like;
    likeNote(note._id, value);
  }

  const handleDelete = (note) => {
    setNote(note);
    setIsDeleteModalOpen(true)
  }

  const handleEdit = (note) => {
    setNote(note)
    setIsEditModalOpen(true)
  }

  const getDate = (value) => {
    const date = new Date(value);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  }

  useEffect(() => {
    console.log("Current Notes are => ", notes);
  }, [notes])


  return (
    <>
      <div className='h-[100vh] overflow-y-scroll'>
        <div className='grid grid-flow-row grid-cols-3 '>
          <div className=" col-span-2">
            <div className="grid grid-flow-col grid-cols-12 row mt-4 ml-3 border-2 border-primary rounded-lg  ">
              <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} className="col-span-11 pl-1 py-1 ml-2 border-none outline-none focus:border-red-600" placeholder='Search ' />
              <button onClick={() => { handleSearch(search) }} className="col-span-1">
                <div type='submit' className=' my-auto text-primary ' >
                  {Search}
                </div>
              </button>
            </div>
          </div>
          <div className=" col-span-1 py-3">
            <div className='ml-32 mt-1 absolute'>
              <button onClick={() => { setDropdown(!dropdown) }} className="flex  text-white bg-red-400 hover:bg-red-600 rounded-md px-5 py-1.5" type="button">Sort <svg className="w-2.5 h-2. ml-3 5 my-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
              </button>
              <div hidden={!dropdown} className="z-10 fixed bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                  <li>
                    <button onClick={() => { setFilters({ ...filters, newestFirst: true }) }} className=" w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Newest first {filters.newestFirst && <span className='float-right'>{Tick}</span>}</button>
                  </li>
                  <li>
                    <button onClick={() => { setFilters({ ...filters, newestFirst: false }) }} className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Oldest first {filters.newestFirst === false && <span className='float-right'>{Tick}</span>}</button>
                  </li>
                  <li>
                    <button onClick={() => { setFilters({ ...filters, fav: !(filters.fav) }) }} className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Favourites {filters.fav === true && <span className='float-right'>{Tick}</span>}</button>
                  </li>
                  <li>
                    <button onClick={() => { setDoubleDropdown(!doubleDropdown) }} className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tags<svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg></button>
                    <div hidden={!doubleDropdown} className="z-20 absolute left-32 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        {Object.keys(currentTags).map((key) => {
                          return <li>
                            <button onClick={() => { handleClick(key) }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{key} {filters.tag === key && <span className='float-right'>{Tick}</span>}</button>
                          </li>
                        })}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button onClick={() => { setActive("All"); setFilters({ fav: false, tag: "All", newestFirst: null }) }} className=" w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove all filters</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 ml-4 space-x-9 overflow-x-auto'>
          <button onClick={() => { handleClick("All") }} name="All" className={`${active === 'All' ? 'bg-primary' : ''} ${active === 'All' ? 'text-white' : 'text-black'} px-9 py-[10px] rounded-md text-sm border-2 border-white hover:border-red-400`}>
            All
          </button>
          {Object.keys(currentTags).map((key) => {
            return <button onClick={(e) => { handleClick(e.target.name) }} name={`${key}`} className={`${active === key ? 'bg-primary' : ''} ${active === key ? 'text-white' : 'text-black'} px-9 py-[10px] rounded-md text-sm border-2 border-white hover:border-red-400`}>
              {key}
            </button>
          })}
        </div>
        <div className="grid grid-flow-row grid-cols-4 ml-3 mt-7">
          {displayNotes.length === 0 ? <div className='col-span-4 '>
            <h1 className='text-2xl text-center font-semibold text-primary'>No Notes Found</h1>
            <img className='h-3/5 m-auto' src={IMAGES.noNotes} alt="No notes to display" />
          </div> : displayNotes.map(note => {
            return <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
              <div>
                <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>{getDate(note.date)}
                  <div className='float-right'>
                    <button onClick={() => { handleLike(note, note.fav) }}>{note.fav ? LikedHeart : Heart}</button>
                    <button onClick={() => { handleEdit(note) }}>{Edit}</button>
                    <button onClick={() => { handleDelete(note) }}>{Trash}</button>
                  </div></p>
              </div>
              <h3 className='my-3 mx-5'>
                <Bullet color={currentTags[note.tag]} /> <span className='ml-2'>{note.title}</span>
              </h3>
              <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
                {note.description}
              </p>
            </div>
          })
          }
        </div>
        <button onClick={() => {setIsAddModalOpen(true)}} className='fixed bottom-10 right-10 font-semibold text-white bg-primary rounded-full px-3 py-2'> {WhiteAdd} Add note</button>
      </div>
      {isEditModalOpen && <EditModal note={note} setIsEditModalOpen={setIsEditModalOpen} isEditModalOpen={isEditModalOpen} />}
      {isDeleteModalOpen && <DeleteModal noteId={note._id} deleteNote={deleteNote} setIsDeleteModalOpen={setIsDeleteModalOpen} isDeleteModalOpen={isDeleteModalOpen} />}
    </>
  )
}
