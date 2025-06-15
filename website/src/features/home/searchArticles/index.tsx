'use client'
import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { RxCross2 } from 'react-icons/rx'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
const SearchArticles = ({ onChange }: { onChange: (str: string) => void }) => {
  /* 
  Animation d'ouverture barre de recherche
  */
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [numberOfWords, setNumberOfWords] = useState(0)

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  /**
   * Ce hook (next) te permets de récupérer les infomations qui sont dans l'URL.
   * Sinon, pour info, on doit faire à l'ancienne, comme ça: window.location
   */
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams)
    if (searchTerm) {
      params.set('query', searchTerm)
    } else {
      params.delete('query')
    }

    const words = searchTerm.split(' ')
    if (numberOfWords < words.length) {
      setNumberOfWords(words.length)

      console.log('push new history point')
      router.push(`${pathname}?${params.toString()}`, {
        scroll: false,
      })
    }

    // replace(`${pathname}?${params.toString()}`)
    // TODO: Implement setQuery(searchTerm), from higher component to get the searchTerm inside a API call.
    // push VS replace
    // push permet de garder une trace historique des activités antérieures de l'utilisateur
    // replace ne garde pas de trace historique
    // Nice to have: Ajouter un point dans l'historique dès que l'on a un mot complet et pas a chaques lettres
    onChange(searchTerm)
  }

  return (
    <div className="relative">
      <div className="z-10 max-w-4xl mx-auto w-full h-12">
        <div className="absolute w-full flex justify-end p-1">
          <form
            className={`relative flex items-center pr-4 transition-all duration-500 ease-in-out ${
              isSearchVisible ? 'w-full' : 'w-10'
            } h-10 rounded-lg shadow-lg overflow-hidden`}
            //annuler le comportement par défaut du formulaire | en transmettant la requête (raffraîchissant la page)
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              placeholder="Research articles..."
              defaultValue={searchParams.get('query')?.toString()}
              onChange={(e) => {
                handleSearch(e.target.value)
              }}
              className={`border-none outline-none h-8 rounded-md ml-1 pl-2 text-gray-700 transition-opacity duration-700 ${
                isSearchVisible
                  ? 'opacity-100 w-full'
                  : 'opacity-0 pointer-events-none'
              }`}
            />
            <div
              className="absolute grid place-items-center place-content-center right-1 w-8 h-8 bg-gradient-to-tr from-cyan-500 to-black rounded-md cursor-pointer transition-transform duration-500"
              onClick={toggleSearch}
            >
              <i
                className={`ri-search-2-line text-white text-lg transition-opacity duration-500 ${
                  isSearchVisible ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffff"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </i>
              <RxCross2
                className={`ri-close-line text-white text-lg transition-opacity duration-500 ${
                  isSearchVisible
                    ? 'absolute opacity-100'
                    : 'absolute opacity-0'
                }`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchArticles
