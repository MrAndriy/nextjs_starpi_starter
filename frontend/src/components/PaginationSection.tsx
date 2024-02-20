import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

export default function PaginationSection({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalPosts: any
  postsPerPage: any
  currentPage: any
  setCurrentPage: any
}) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const maxPageNum = 5 // Maximum page numbers to display at once
  const pageNumLimit = Math.floor(maxPageNum / 2) // Current page should be in the middle if possible

  let activePages = pageNumbers.slice(Math.max(0, currentPage - 1 - pageNumLimit), Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length))

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem key={idx} className="cursor-pointer">
        <PaginationLink isActive={currentPage === page} onClick={() => setCurrentPage(page)} className="hover:bg-zinc-300">
          {page}
        </PaginationLink>
      </PaginationItem>
    ))

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(<PaginationEllipsis key="ellipsis-start" onClick={() => setCurrentPage(activePages[0] - 1)} />)
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(<PaginationEllipsis key="ellipsis-end" onClick={() => setCurrentPage(activePages[activePages.length - 1] + 1)} />)
    }

    return renderedPages
  }

  return (
    <div>
      <Pagination>
        <PaginationContent className="max-md:flex-wrap max-md:justify-center">
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={handlePrevPage} className="hover:bg-zinc-300" />
          </PaginationItem>

          {renderPages()}

          <PaginationItem className="cursor-pointer ">
            <PaginationNext onClick={handleNextPage} className="hover:bg-zinc-300" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
